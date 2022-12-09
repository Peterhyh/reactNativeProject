import { Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

const CampsiteDetail = ({campsite}) => {
    const {image, name, description} = campsite;

    return(
        <Col>
            <Card md='12' className='m-4'>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;