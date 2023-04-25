import styles from './Playground.module.scss'
import classNames from 'classnames/bind'
import Cube from '../../Cube'
import { useState, useEffect } from 'react'
const cx = classNames.bind(styles)



export default function Playground() {
    const [load, setLoad] = useState("Loading");
    useEffect(() => {
        const timer = setInterval(() => {
            switch (load) {
                case "Loading": {
                    setLoad("Loading.")
                    break
                }
                case "Loading.": {
                    setLoad("Loading..")
                    break
                }
                case "Loading..": {
                    setLoad("Loading...")
                    break
                }
                case "Loading...": {
                    setLoad("Loading")
                    break
                }
            }
        }, 1000)

        return () => clearInterval(timer)
    })

    return (
        < div className={cx('wrapper')} >
            <div className={cx('loading-title')}>{load}</div>
            <div className={cx('loading-wrapper')}>
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.1} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.2} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.3} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.4} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.5} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.6} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.7} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.8} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={0.9} />
                <Cube width={50} position={{ left: 0, top: 0 }} delay={1} />
            </div>
        </div >
    )
}