import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../routes'

const cx = classNames.bind(styles)

function NavButton({ content, path }) {
    return (
        <div className={cx('header-item')}>
            <li className={cx('header-button')}>
                <Link to={path}>{content}</Link>
            </li>
            <div className={cx('header-button-border')}></div>
        </div>
    )
}

export default function Header() {

    return (
        <div>
            <div className={cx('header-holder')}></div>
            <div className={cx('header')}>
                <ul className={cx('header-container')}>
                    {publicRoutes.map((item) => {
                        return <NavButton content={item.content} path={item.path} />
                    })}
                </ul>
            </div>
        </div>
    )
}