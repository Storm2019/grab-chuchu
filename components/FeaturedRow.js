import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row item-center justify-between px-4">
        <Text className="text-xl font-bold">{title}</Text>
        <ArrowRightIcon color="#000000" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal:15,
          paddingTop:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
        <RestaurantCard
          id="1"
          imgUrl="https://images.pexels.com/photos/1787176/pexels-photo-1787176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="McDonalds"
          rating="4.5"
          genre="Fastfood"
          address="Main Street Chuchu"
          short_description="A short description"
          dishes="burger"
          lang="1"
          lat="2"
        />
      </ScrollView>

    </View>
  );
};

export default FeaturedRow;
