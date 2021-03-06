import { AntDesign, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import * as React from 'react'

import { theme } from '../components/Theme'
import CartScreen from '../screens/CartScreen'
import FeedScreen from '../screens/FeedScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import {
  BottomTabParamList,
  BottomTabRouteName,
  FeedParamList,
  FeedTabRouteName,
  RootStackRouteName,
  SearchParamList,
  SearchTabRouteName,
  CreateParamList,
  CreateTabRouteName,
  ProfileTabRouteName,
  ProfileParamList
} from './types'
import ProductScreen from '../screens/ProductScreen'
import { UserRolesEnum } from '../domain/enums'
import { State } from '../store'
import { NavigationState } from '../store/types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

// FIXME: Refactor to DRY
export default function BottomTabNavigator() {
  const { userRole } = useSelector<State, NavigationState>(state => state.navigation)

  const SellerNavigation = () => (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.FEED}
      tabBarOptions={{ 
        activeTintColor: theme.colour.black,
        inactiveTintColor: '#BFC5D2',
        showLabel: false
      }}>
      <BottomTab.Screen
        name={BottomTabRouteName.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.SEARCH}
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="search1" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CREATE}
        component={CreateNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="plussquareo" color={color} />,
        }}
        listeners={({ navigation }: StackScreenProps<any>) => ({
          tabPress: event => {
            event.preventDefault()
            navigation.navigate(RootStackRouteName.CREATE_MODAL)
          }
        })}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )

  const BuyerNavigation = () => (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.FEED}
      tabBarOptions={{ 
        activeTintColor: theme.colour.black,
        inactiveTintColor: '#BFC5D2',
        showLabel: false
      }}>
      <BottomTab.Screen
        name={BottomTabRouteName.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.SEARCH}
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="search1" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )

  return (
    (userRole && userRole[0] === UserRolesEnum.SELLER) ? SellerNavigation() : BuyerNavigation()
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string, color: string, type?: string }) {
  return props.type === "Feather" ?
    <Feather size={24} style={{ marginBottom: -3 }} {...props} /> :
    <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />
}

// second level header options
const headerOptions = {
  headerShown: true,
  title: '',
  headerStyle: { },
  headerBackTitle: " "
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedStack = createStackNavigator<FeedParamList>()

function FeedNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name={FeedTabRouteName.FEED_SCREEN}
        component={FeedScreen}
        options={{ headerShown: false }}
      />
    </FeedStack.Navigator>
  )
}

const SearchStack = createStackNavigator<SearchParamList>()

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SearchTabRouteName.SEARCH_SCREEN}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  )
}

const CreateStack = createStackNavigator<CreateParamList>()

function CreateNavigator() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen
        name={CreateTabRouteName.CREATE_SCREEN}
        component={PlaceHolderModalScreen}
        options={{ headerShown: false }}
      />
    </CreateStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerTintColor: theme.colour.black }}>
      <ProfileStack.Screen
        name={ProfileTabRouteName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={ProfileTabRouteName.PRODUCT_SCREEN}
        component={ProductScreen}
        options={headerOptions}
      />
    </ProfileStack.Navigator>
  )
}

// placeholder modal screen
// TODO: Find a better solution to open modal screens from bottom tab navigator
function PlaceHolderModalScreen({ navigation }: StackScreenProps<any>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "blue" }}>
      <Text>This is a placeholder modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}