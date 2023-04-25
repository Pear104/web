import styles from './Home.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Home() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx("title")}>...</h2>
            <div className={cx("background")} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/smrbg.png)` }} ></div>
        </div>
    )
}