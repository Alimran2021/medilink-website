import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices/useServices';
import Service from '../Service/Service';

// services area here
const Services = () => {
    const services = useServices()
    return (
        <div id="services" className="my-8 container mt-20">
            <h1 className="text-center fw-bold mb-8">Oure Latest Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </Row>
        </div>
    );
};

export default Services;