import styles from './Garbagedump.module.scss'
import classNames from 'classnames/bind'
import { dump, model } from './dumpInfo'

import { DesBlock, PicBlock, PicTitBlock, WebPicTitBlock } from '../../Block'

const cx = classNames.bind(styles)

export default function Garbagedump() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-wrapper')}>
                <div className={cx('title')}>trash which i created (⊙_⊙;)</div>
                <div className={cx('gallery')}>
                    {dump.map((item, index) => (
                        <PicTitBlock key={index} title={item.title} des={item.description} path={item.path} img={item.img} size={item.size} />
                    ))}
                </div>
                <div className={cx('title')}>bullshit 💩</div>
                <div className={cx('gallery')}>
                    {model.map((item, index) => (
                        <WebPicTitBlock key={index} title={item.title} des={item.description} path={item.path} img={item.img} size={item.size} />
                    ))}
                </div>
            </div>
        </div>
    )
}