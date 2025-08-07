import logo from '../assets/herogra-logo.png';
export default function Cabecera() {
  return (
    <div className="navbar flex bg-base-600 shadow-sm mb-5">
  <div className="flex-1 text-xl">
    <a className="btn btn-ghost text-xl" href='https://herogragroup.com/' style={{ display: 'flex', height: '150px',backgroundColor: 'white' }}>
        <img src={logo} alt="Herogra-Logo" style={{width: '150px'}} />
    </a>
  </div>
  {/* <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Producción</a></li>
      <li><a>Mantenimiento</a></li>
      <li><a>Calidad</a></li>
      <li><a>Logistica</a></li>
      <li><a>I+D</a></li>
      <li><a>Marketing</a></li>
    </ul>
  </div> */}
</div>
  );
} 