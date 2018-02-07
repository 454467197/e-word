
import {Row,Col,Input,Tabs,Button,Alert,Spin,Icon} from 'antd';
import {WeaTop, WeaTab, WeaTools,WeaRichText} from 'ecCom';



export default class Word extends React.Component {


    render() {

        return <div >
            <WeaTop

                    icon={<i className='icon-coms-workflow' />}

                    iconBgcolor='#0079DE' title={'我的单词'}

                     showDropIcon={false}/>

            <Row  >
                <Col span={8} style={{border:'1px solid red',height:'100%'}}    >
                    <WeaRichText/>
                </Col>
                <Col   span={8}  style={{border:'1px solid red',height:'100%'}} >
                </Col>
                <Col  span={8}  style={{border:'1px solid red',height:'100%'}} >
                </Col>


            </Row>


            this is  </div>;
    }
}