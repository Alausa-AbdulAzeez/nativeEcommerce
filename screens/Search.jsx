import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'
import { styles } from './search.styles'
import axios from 'axios'
import { SearchTile } from '../components'

const Search = () => {
  // SEARCH VARIABLE
  const [searchKey, setSearchKey] = useState('')

  // SEARCH RESULTS
  const [searchResult, setSearchResult] = useState([])

  // FUNCTION TO HANDLE SEARCH ICON PRESS
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.131:3000/api/product/search?key=${searchKey}`
      )
      setSearchResult(response.data)
    } catch (error) {
      setSearchResult([])
    }
  }
  // END OF FUNCTION TO HANDLE SEARCH ICON PRESS

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='search-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for'
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Ionicons name='camera-outline' size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      {searchResult?.length === 0 ? (
        <View style={styles.noResultContainer}>
          {/* <Text>Hello</Text> */}
          <Image
            source={require('../assets/images/Pose23.png')}
            style={styles.noResultImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  )
}

export default Search
