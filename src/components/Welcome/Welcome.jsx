import logo from '../../logo.svg';

function Welcome() {
  return (
    <div className="text-center">
      <header className="flex-center flex min-h-screen flex-col bg-gray-800 text-white">
        <img src={logo} className="pointer-events-none h-[40vmin]" alt="logo" />
        <p>Welcome to React Workshop</p>
      </header>
    </div>
  );
}

export default Welcome;
