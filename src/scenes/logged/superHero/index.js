import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';

import useSuperHero from '../../../hooks/useSuperHero';
import Modal from '../../../components/commons/modal';
import useModal from '../../../hooks/useModal';
import Button from '../../../components/commons/button';
import Image from '../../../components/commons/image';
import Br from '../../../components/commons/br';
import {getSuperHeroes} from '../../../state/ducks/superHero/actions';

const SuperHeroHoc = (props) => {
    const hook = useSuperHero(props);
    const modalHook = useModal();
    return <SuperHero {...hook} {...modalHook} />;
};

const SuperHero = (props) => (
    <>
        <Modal isVisible={props.isVisible}>
            <View style={style.container}>
                <Text style={style.text}> Estadisticas de poder:</Text> <Br/>
                <Text style={style.text}> Combate: {props.hero.powerstats.combat}</Text>
                <Text style={style.text}> Durabilidad: {props.hero.powerstats.durability}</Text>
                <Text style={style.text}> Poder: {props.hero.powerstats.power}</Text>
                <Text style={style.text}> Velocidad: {props.hero.powerstats.speed}</Text>
                <Text style={style.text}> Fuerza: {props.hero.powerstats.strength}</Text><Br/>
                <Button
                    isActive
                    text="Ver menos"
                    onClick={props.hiddenModal}
                />
            </View>

        </Modal>
        <Text>{props.hero.image.url}</Text>
        <View style={style.containerChildren}>
            <Image
                style={style.image}
                source={{uri: props.hero.image.url}}
            />
            <Text style={style.textName}>{props.hero.name}</Text>
            <View style={style.button}>
            <Button
                isActive
                text="Ver mas"
                onClick={props.showModal}
            />
            </View>
        </View>
    </>
);

const mapStateToProps = (state) => ({
    ...state.superHero,
});

const mapDispatchToProps = (dispatch) => ({
    getSuperHeroes: (superHeroId) => dispatch(getSuperHeroes(superHeroId)),
});

const style = StyleSheet.create({
    container:{
        backgroundColor:'#97ffc4',
        borderRadius: 12,
        width: 180,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "42%",
        marginTop: "20%",
    },
    containerChildren: {
        backgroundColor: '#97ffc4',
        width: '10%',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    textName:{
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
    },
    text: {
        fontWeight: "bold",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SuperHeroHoc);
