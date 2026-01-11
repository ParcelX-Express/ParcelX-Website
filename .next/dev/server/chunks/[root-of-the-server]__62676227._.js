module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/track.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/node_modules/@supabase/supabase-js)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://vewlwvzuimodmfsoeznd.supabase.co");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { tracking_number } = req.body;
    if (!tracking_number || typeof tracking_number !== 'string') {
        return res.status(400).json({
            error: 'Tracking number is required'
        });
    }
    const cleanTrackingNumber = tracking_number.trim().toUpperCase();
    if (cleanTrackingNumber.length < 3 || cleanTrackingNumber.length > 50) {
        return res.status(400).json({
            error: 'Invalid tracking number format'
        });
    }
    if (!supabaseServiceKey) {
        return res.status(500).json({
            error: 'Server configuration error'
        });
    }
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__["createClient"])(supabaseUrl, supabaseServiceKey);
        const { data: shipment, error: shipmentError } = await supabase.from('shipments').select('id, tracking_number, status, origin, destination, estimated_delivery, created_at, updated_at').eq('tracking_number', cleanTrackingNumber).single();
        if (shipmentError || !shipment) {
            return res.status(404).json({
                error: 'Shipment not found'
            });
        }
        const { data: updates } = await supabase.from('tracking_updates').select('id, location, description, status, occurrence_time').eq('shipment_id', shipment.id).order('occurrence_time', {
            ascending: false
        });
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
        return res.status(500).json({
            error: 'An error occurred'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62676227._.js.map