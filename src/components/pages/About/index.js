import styles from './About.module.scss'
import classNames from 'classnames/bind'
import { DesBlock, PicBlock } from '../../Block'

const cx = classNames.bind(styles)

console.log(process.env.PUBLIC_URL)

export default function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cv-wrapper')}>
                <div className={cx('row-wrapper')}>
                    <DesBlock title='Summary' color='chartreuse' full='full'>
                        <div className={cx('row-wrapper')}>
                            <PicBlock des="i'm a poopmaker" img={process.env.PUBLIC_URL + "/img/rikka.webp"} />
                            <ul style={{ maxWidth: '600px', padding: '10px', alignSelf: 'flex-start', justifySelf: 'flex-start' }}>
                                <h4 style={{ marginLeft: '-20px' }}>Hello , I'm Truong <span>(●'◡'●)</span></h4>
                                <li>I'm a troublemaker of those companies which i take part in <span>(＃°Д°)</span></li>
                                <li>I'm a loser, an idiot, a weeaboo, and also a useless Fullsnack Developer<span> (￣ 3￣)づ</span></li>
                                <li>I'm interesting in learning amazing and stupid things</li>
                                <li>I'm also a big fan of making animate stuffs like 2D or 3D <span> (｀∇´)b</span></li>
                                <li>I have nothing to say anymore, but maybe i should write some lines to make this page  longer <span>(～￣▽￣)～</span></li>

                                <h4 style={{ marginLeft: '-20px', paddingTop: '10px' }}>Contact</h4>
                                <li>Email: dontdistractme104@gmail.com</li>
                                <li>Github: <a href='https://github.com'>Pear104</a></li>
                            </ul>

                        </div>
                    </DesBlock>
                    <PicBlock img={process.env.PUBLIC_URL + '/img/hackerman2.jpg'} des="me when breaking the NASA security system with HTML" />
                </div>
                <div className={cx('row-wrapper')}>
                    <PicBlock />
                    <DesBlock title={'Work experience'} color='deepskyblue'>
                        <p>
                            <h4>Marvel Studio (2021 - 2025)</h4>
                            <ul>
                                <li>Position: Graphics Destroyer</li>
                                <li>Description: I destroy all the Graphics designs of the studio</li>
                            </ul>
                        </p>
                        <p>
                            <h4>Facebook.com (All the time)</h4>
                            <ul>
                                <li>Position: Shit contributor</li>
                                <li>Description: I spent all day surfing web to see other people's shits and give shits back to other people</li>
                            </ul>
                        </p>
                        <p>
                            <h4>localhost (1999 - Present)</h4>
                            <ul>
                                <li>Position: Fullstack Developer</li>
                                <li>Description: Repeatedly copy and paste from Internet</li>
                            </ul>
                        </p>
                    </DesBlock>
                    <DesBlock title={'Skill'} color='red'>
                        <p>
                            <h4>Languages</h4>
                            <ul>
                                <li>Vietnamese: Native</li>
                                <li>English: 7/10 (From my point of view <span>( •̀ ω •́ )</span>)</li>
                                <li>Japanese: <span>(⊙ˍ⊙)</span></li>
                            </ul>
                        </p>
                        <p>
                            <h4>Programming</h4>
                            <ul>
                                <li>Languages: JavaScript, HTML/CSS, Java, PHP, C++, Golang, Python</li>
                                <li>Frameworks/Platform: ReactJS, NodeJS, Spring, Spring Boot, Laravel, ThreeJS</li>
                                <li>Database: MySQL</li>
                                <li>Version control: Git</li>
                                <li>Tools: VSCode, DevC++, NetBeans</li>
                            </ul>
                        </p>
                    </DesBlock>
                </div>

                <div className={cx('row-wrapper')}>
                    <DesBlock title={'Achievement'} color='orange'>
                        <p>
                            <ul>
                                <li>Successfully hacked NASA with HTML</li>
                                <li>Win the 1st prize of the code competition for idiots</li>
                                <li>Has been invited to work as a professor in poops analytics at my dad's farm <span>💩</span></li>
                            </ul>
                        </p>
                    </DesBlock>
                    <DesBlock title={'Education'} color='pink'>
                        <p>
                            <h4>FPT University (2022-2025)</h4>
                            <ul>
                                <li>Be considered as the most stupid student in the school</li>
                                <li>Reach the highest limit of stupidness</li>
                                <li>GPA: 5/4</li>
                            </ul>
                        </p>
                    </DesBlock>
                    <PicBlock img={process.env.PUBLIC_URL + '/img/dinos.gif'} size='contain' des='i love doing nonsense work' />
                </div>
            </div>
        </div>
    )
}