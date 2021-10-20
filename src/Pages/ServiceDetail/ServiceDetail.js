import { useParams } from 'react-router';
import useServices from '../../hooks/useServices/useServices';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const services = useServices()
    const detail = services.filter(dt => dt.id == serviceId)
    return (
        <div className="text-center grid grid-cols-1">
            <h1>Our Service Detail</h1>
            <img className="mx-auto" src={detail[0]?.photo} alt="" />
            <h2>{detail[0]?.serviceType}</h2>
            <p>{detail[0]?.serviceDetail.slice(0, 150)}</p>

        </div>
    );
};

export default ServiceDetail;