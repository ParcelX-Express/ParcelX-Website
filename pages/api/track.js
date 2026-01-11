import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tracking_number } = req.body;

  if (!tracking_number || typeof tracking_number !== 'string') {
    return res.status(400).json({ error: 'Tracking number is required' });
  }

  const cleanTrackingNumber = tracking_number.trim().toUpperCase();

  if (cleanTrackingNumber.length < 3 || cleanTrackingNumber.length > 50) {
    return res.status(400).json({ error: 'Invalid tracking number format' });
  }

  if (!supabaseServiceKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: shipment, error: shipmentError } = await supabase
      .from('shipments')
      .select('id, tracking_number, status, origin, destination, estimated_delivery, created_at, updated_at')
      .eq('tracking_number', cleanTrackingNumber)
      .single();

    if (shipmentError || !shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    const { data: updates } = await supabase
      .from('tracking_updates')
      .select('id, location, description, status, occurrence_time')
      .eq('shipment_id', shipment.id)
      .order('occurrence_time', { ascending: false });

    return res.status(200).json({
      shipment: {
        tracking_number: shipment.tracking_number,
        status: shipment.status,
        origin: shipment.origin,
        destination: shipment.destination,
        estimated_delivery: shipment.estimated_delivery,
        updated_at: shipment.updated_at
      },
      tracking_updates: updates || []
    });
  } catch (error) {
    console.error('Track API error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
