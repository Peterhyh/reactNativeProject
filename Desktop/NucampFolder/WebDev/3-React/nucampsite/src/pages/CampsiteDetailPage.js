import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { CampsiteDetail } from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById
};

