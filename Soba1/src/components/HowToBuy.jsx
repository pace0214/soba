import { Container, Row, Col } from "react-bootstrap"
import CommonTitle from './CommonTitle'
import Token from './Token'

import img_1 from '../assets/img/buy/1.png'
import img_2 from '../assets/img/buy/2.png'
import img_3 from '../assets/img/buy/3.png'
import img_4 from '../assets/img/buy/4.png'

export default function HowToBuy() {
    const buy = [
        {
            title: 'Create a wallet',
            des: `Download phantom wallet or your wallet of choice from the app store for free. Desktop users. Download the google chrome extension by going to phantom app.`,
            img: img_1
        },
        {
            title: 'Get some sol',
            des: `Have sol in your wallet to switch to $SOBA. If you don’t have any SOL,,you can buy directly on Phantom, transfer from another wallet or buy on another exchange and add it to your wallet.`,
            img: img_2
        },
        {
            title: 'Go to Raydium',
            des: `Connect to Raydium or Jupiter Goto raydium.io or jup.ag inside your Phantom app. Connect your wallet . Past the $SOBA token address into Rayduim or Jupiter select Pape and comform .`,
            img: img_3
        },
        {
            title: 'Get some sol',
            des: `Have sol in your wallet to switch to $SOBA. If you don’t have any SOL,,you can buy directly on Phantom, transfer from another wallet or buy on another exchange and it to your wallet.`,
            img: img_4
        },
    ]
    return (
        <div className="howTo common-padding pb-0">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={9}>
                        <CommonTitle title="HOW TO BUY" des="This is the dummy bastard who made this coin Accidently, but then ....He decided to share it with a community of pure BASTARDS Now the police is chasing him!!!!" />
                    </Col>
                </Row>
                <Row className="common-row">
                    {buy.map((item, index) => (
                        <Col key={index} xs={12} md={6} lg={3} className="d-flex">
                            <div className="howTo-item w-100" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`${index + 1}00`}>
                                <div className="howTo-count fs-6 bg-primary text-white mb-3 mb-md-4 d-flex align-items-center justify-content-center">{index + 1}</div>
                                <h4 className="mb-2 pb-1 mb-md-3 pb-md-0">{item.title}</h4>
                                <p>{item.des}</p>
                                <img src={item.img} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12} className="mt-3 mt-md-4">
                        <div className="tokenomics-item p-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
                            <Token address={'25p2BoNp6qrJH5As6ek6H7Ei495oSkyZd3tGb97sqFmH'} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
