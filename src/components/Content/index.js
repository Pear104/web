import styles from './Content.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Content() {

    return (
        <div className={cx('wrapper')}></div>
    )
}