import { StyleSheet, TouchableOpacity, View, Text,Image } from 'react-native'
import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import { 
  shadow,
  defaultIcon,
  fairy,
  bug,
  dark,
  dragon,
  electric,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  unknown,
  water,
} from '../assets/type';

const typeColors = {
  fighting: {color :'bg-red-800', img :  fighting} ,
  poison: {color:'bg-violet-600',img: poison},
  flying: {color:'bg-sky-400',img: flying},
  ground: {color:'bg-yellow-800',img: ground},
  normal: {color:'bg-gray-300',img: normal},
  ghost: {color:'bg-indigo-900',img: ghost},
  rock: {color:'bg-yellow-950',img: rock},
  steel: {color:'bg-slate-300',img: steel},
  bug: {color:'bg-lime-400',img: bug},
  fire: {color:'bg-red-400',img: fire},
  electric: {color:'bg-yellow-300',img: electric},
  psychic: {color:'bg-rose-400',img: psychic},
  grass: {color:'bg-green-400',img: grass},
  water: {color:'bg-blue-500',img: water},
  ice: {color:'bg-cyan-200',img: ice},
  dark: {color:'bg-gray-800',img: dark},
  dragon: {color:'bg-indigo-700',img: dragon},
  unknown: {color:'bg-slate-900',img: unknown},
  shadow: {color:'bg-neutral-400',img: shadow},
  fairy: {color:'bg-pink-300', img: fairy},
  default: {color:'bg-green-400', img : defaultIcon },
};



const FeaturedCard = ({...props}) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#4CAF50');
  const [loading , setLoading ] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(props.link)
      if(response && response.data){
        const data = response.data
        if(data && data.sprites && data.sprites.default){
          setImgUrl(data.sprites.default);
          setBackgroundColor(typeColors.default.color)
          setLoading(false);
          return ;
        }else if (data.sprites?.other?.['official-artwork']?.front_default) {
          setImgUrl(data.sprites?.other?.['official-artwork']?.front_default);
          if(data.types){
            const typeNames = data.types.map((type) => type.type.name.toLowerCase());
            const matchingType = typeNames.find((type) => typeColors[type]);
            setBackgroundColor(typeColors[matchingType].color || typeColors.default.color);
            setLoading(false);
            return ;
            };
        }else if (data.damage_relations) {
          const name = props.name.toLowerCase();
          const matchingType = typeColors[name].color;
          setBackgroundColor(matchingType || typeColors.default.color);
          setLoading(false);
          return ;
        }
        else{
          return null;
        }

        }
       
    } catch (error) {
      throw new Error('failed to fetch asset source')
    }
  }

  useEffect(()=>{
    fetchData()
  },[props.name])

  const imageSource = (imgUrl) ? { uri : imgUrl} : typeColors[props.name]?.img;

  return (
    (loading) ? (
      <TouchableOpacity 
      className={`${backgroundColor} flex-1 m-2 h-[145px] w-[48%] rounded-xl justify-end items-center p-4`}
    >   
        <Text className=' text-lg font-base color-white uppercase '>
            Loading....
        </Text>
    </TouchableOpacity>
    ) : (
      <TouchableOpacity 
      className={`${backgroundColor} flex-1 m-2 h-[145px] w-[48%] rounded-xl justify-center items-center p-4`}
      // onPress={() => navigation.navigate('detailed')}
    >   
        <Image 
         source={imageSource}
          className={(props.link.includes('pokemon') ? `h-[85%] w-[85%] object-contain` :  className='h-[60%] w-[50%] object-contain ' )}/>
        <Text className=' text-lg font-base color-white uppercase '>
            {props.name}
        </Text>
    </TouchableOpacity>
    
    )

  )
}

export default FeaturedCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 2,
        height: 145,
        width: '48%',
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 4,
      },
      image: {
        height: '100%', // Adjust this based on your design
        width: '100%',
        resizeMode: 'cover', // or 'contain' based on your preference
        borderRadius: 8,
        objectFit: 'contain'
      },
      text: {
        fontSize: 18,
        color: 'white',
        textTransform: 'uppercase',
        marginTop: 8,
      },
});