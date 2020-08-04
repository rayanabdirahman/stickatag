import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { BottomTabParamList } from '../../navigation/types'
import { RootScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text, FeedCard } from '../../components'
import { ScrollView } from 'react-native'

export const FeedScreen = ({ navigation }: StackScreenProps<BottomTabParamList, RootScreenName.FEED>) => {
  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Feed</Text>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <FeedCard />
        </ScrollView>
      </ContentContainer>
    </Layout>
  )
}
