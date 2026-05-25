export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node')
    const {
      getNodeAutoInstrumentations,
    } = await import('@opentelemetry/auto-instrumentations-node')
    const {
      OTLPTraceExporter,
    } = await import('@opentelemetry/exporter-trace-otlp-http')
    const {
      resourceFromAttributes,
    } = await import('@opentelemetry/resources')
    const {
      ATTR_SERVICE_NAME,
    } = await import('@opentelemetry/semantic-conventions')

    const sdk = new NodeSDK({
      resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: 'jobradar-pro',
      }),
      traceExporter: process.env.NODE_ENV === 'production'
        ? new OTLPTraceExporter({
            url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
          })
        : new OTLPTraceExporter(),
      instrumentations: [
        getNodeAutoInstrumentations({
          '@opentelemetry/instrumentation-fs': { enabled: false },
        }),
      ],
    })

    sdk.start()
  }
}
