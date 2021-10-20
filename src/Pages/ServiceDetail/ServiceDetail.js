import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices/useServices';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const services = useServices()
    // console.log(services.length)
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('/services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    const detail = services.filter(dt => dt.id == serviceId)
    console.log(detail)
    return (
        <div>
            <h1>hello details</h1>
            <img src={detail[0]?.photo} alt="" />
            <h2>{detail[0]?.serviceType}</h2>
            <p>{detail[0]?.description.slice(0, 150)}</p>

        </div>
    );
};

export default ServiceDetail;