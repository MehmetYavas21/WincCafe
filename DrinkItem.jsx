import './DrinkItem.css';
import { Image , Text, Center} from '@chakra-ui/react';



export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Center bg='tomato' h='200px' cursor='pointer' color='white' direction="column" onClick={() => clickFn(drink)}>
            <Image
              direction="row"
              boxSize='50px'
              borderRadius='10px'
              objectFit='cover'
              src={drink.imgUrl}
              alt={drink.alt}
            />
        <Text fontSize='lg'  as='samp'>{drink.name}</Text>
    </Center>     
    );
};



