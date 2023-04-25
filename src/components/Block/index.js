import styles from './Block.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DesBlock({ title, color = 'rgb(38, 210, 93)', full = '', children = "" }) {
    return (
        <div className={cx('block-item', `${full}`)}>
            <div className={cx('block-title')} style={{ backgroundColor: `${color}` }}>{title}</div>
            <div className={cx('block-content')}>
                {children}
            </div>
        </div>
    )
}

function PicBlock({ img = process.env.PUBLIC_URL + "/img/walkman.gif", des = "I'm on my wayyyyyyyyy!", size = 'cover', path = null, children = "" }) {
    return (
        <div className={cx('block-pic-parent')}>
            <a className={cx('block-pic-item')} href={path} target='_blank' rel="noreferrer">
                <div className={cx('block-pic')} style={{ backgroundImage: `url(${img})`, backgroundSize: `${size}` }}></div>
                <div className={cx('block-pic-des')}>
                    <p>{des}</p>
                </div>
                {children}
            </a>
        </div>
    )
}

function PicTitBlock({ color = 'rgb(38, 210, 93)', title = 'ahihi', img = process.env.PUBLIC_URL + '/img/walkman.gif', des = "I'm on my wayyyyyyyyy!", size = 'cover', path = null, children = "" }) {
    return (
        <div className={cx('block-pic-tit-parent')}>
            <a className={cx('block-pic-tit-item')} href={path} target='_blank' rel="noreferrer">
                <div className={cx('block-pic-tit-title')} style={{ backgroundColor: color }}>{title}</div>
                <div className={cx('block-pic-tit')} style={{ backgroundImage: `url(${img})`, backgroundSize: `${size}` }}></div>
                <div className={cx('block-pic-tit-des')}><p>{des}</p></div>
            </a>
        </div>
    )
}

function WebPicTitBlock({ color = 'rgb(38, 210, 93)', title = 'ahihi', img = process.env.PUBLIC_URL + '/img/walkman.gif', des = "I'm on my wayyyyyyyyy!", size = 'cover', path = null, children = "" }) {
    return (
        <div className={cx('block-pic-tit-parent')}>
            <div className={cx('block-pic-tit-item')} href={'https://pear104.github.io/cube/'} target='_blank' rel="noreferrer">
                <div className={cx('block-pic-tit-title')} style={{ backgroundColor: color }}>{title}</div>
                <iframe src={path} className={cx('block-pic-tit')} style={{ backgroundSize: `${size}` }}></iframe>
                <div className={cx('block-pic-tit-des')}><p>{des}</p></div>
            </div>
        </div>
    )
}



export { DesBlock, PicBlock, PicTitBlock, WebPicTitBlock }
