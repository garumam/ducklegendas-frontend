import React, {useState} from 'react';
import {
    Container
} from './styles';
import { baseUrl } from "services/api";
import image_serie from "assets/img/sem_capa.jpg";

const Gallery = props => {
    const [selected, setSelected] = useState(null);
    return (
        <Container>
            {props.data.map((item, index) => (
                <img
                    style={selected === item.image? {
                        boxShadow: '0px 0px 2px 3px #6759FF'
                    } : {}}
                    key={index} 
                    src={baseUrl+item.image} 
                    alt={image_serie} 
                    onClick={
                        () => {
                            props.setFieldValue(
                                props.inputName,
                                item.image
                            )
                            setSelected(item.image);
                        }
                    }
                />
            ))}
        </Container>
    );
}

export default Gallery;