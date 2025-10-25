import './Logo.css'
export default function Logo({size}) {
    const size_map = {
        'small' : '--font-size-small',
        'regular' : '--font-size-regular',
        'large' : '--font-size-large',
        'giant' : '--font-size-giant',
    }
    return (
    <div className="logo" style={{fontSize: `var(${size_map[size]})`}}>
        <span style={{fontFamily: 'oranienbaum'}}>RAJNISH</span>
        <span style={{opacity: 0, userSelect:'none'}}></span>
        <span style={{fontFamily: 'NeueMontreal-bold', letterSpacing: '-2px'}}>RAJ</span>
    </div>)
}