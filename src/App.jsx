import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div style={{ backgroundColor: '#eeeeee', position: 'relative', minHeight: '100vh' }}>
      <Spline scene="https://prod.spline.design/YsIDcnuNg3hJqCmF/scene.splinecode" />

      <div style={{ position: 'absolute', bottom: 10, width: '100%', textAlign: 'center' }}>
        <a href="https://app.themetadao.org" style={{ margin: '10px', color: 'black', fontFamily: 'Cochin, Helvetica Neue, Helvetica, Serif' }}>App</a>
        <a href="https://docs.themetadao.org" style={{ margin: '10px', color: 'black', fontFamily: 'Cochin, Helvetica Neue, Helvetica, Serif' }}>Docs</a>
      </div>
    </div>
  );
}
