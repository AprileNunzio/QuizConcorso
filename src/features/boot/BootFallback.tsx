export function BootFallback() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        background: 'var(--bg-main, #0d0f17)',
        color: 'var(--text-main, #ffffff)',
      }}
    >
      <div className="spinner" style={{ width: 44, height: 44, marginBottom: 16 }} />
      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted, #94a3b8)', letterSpacing: '0.5px' }}>
        Inizializzazione Quiz &amp; Concorsi Hub...
      </span>
    </div>
  );
}
