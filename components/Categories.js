import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="Chan"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/2204769/pexels-photo-2204769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
        <CategoryCard 
            imgUrl='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title="sdasdsad"
            />
    

    </ScrollView>
  )
}

export default Categories