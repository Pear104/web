import './cube.scss'

export default function Cube({ width, position, delay }) {
    return (
        <div className="cube" style={{
            width: `${width}px`,
            height: `${width}px`,
            left: `${position.left}px`,
            top: `${position.top}px`,
            animationDelay: `${delay}s`,
        }}>
            <div className="front face" style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `translateZ(${width / 2}px)`
            }} ></div>
            <div style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `rotateX(180deg) translateZ(${width / 2}px)`
            }} className="face back"></div>
            <div style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `rotateX(90deg) translateZ(${width / 2}px)`
            }} className="face top"></div>
            <div style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `rotateX(-90deg) translateZ(${width / 2}px)`
            }} className="face bottom"></div>
            <div style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `rotateY(90deg) translateZ(${width / 2}px)`
            }} className="face left"></div>
            <div style={{
                width: `${width}px`,
                height: `${width}px`,
                transform: `rotateY(-90deg) translateZ(${width / 2}px)`
            }} className="face right"></div>
        </div>
    )
}