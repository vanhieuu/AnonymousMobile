import { RouteProp, useRoute } from '@react-navigation/core'
import React from 'react'
import { StyleSheet,} from 'react-native'
import { RootStackParamList } from '../../../nav/RootStack'
import { Colors, Text, View } from 'react-native-ui-lib'


interface Props {
    ListHeaderComponent:
      | React.ComponentType<any>
      | React.ReactElement
      | null
      | undefined;
  }



const ProductInfo = ({ListHeaderComponent}:Props) => {
    const route = useRoute<RouteProp<RootStackParamList,'DetailItems'>>()
    const itemInfo = route.params.item
    return (
        <View >
        <View backgroundColor={Colors.primary} >
          <Text h17 black>
            {itemInfo.listedPrice}
          </Text>
          <Text h17 black>
            {itemInfo.quantity}
          </Text>
          <Text h17 black>
            {itemInfo.tags}
          </Text>
        </View>
        <View height={1} bg-dark80 marginT-12 />
        <View marginH-24 marginB-32>
          {itemInfo.description}
        </View>
      </View>
    )
}

export default ProductInfo

const styles = StyleSheet.create({})
