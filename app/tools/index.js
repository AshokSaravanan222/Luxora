import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="brain" />

export default function Page() {
  return (
    <View style={{padding: 10, width: 400}}>

    <Card>
        <Card.Title titleVariant="titleLarge" title="Learn" left={LeftContent} />
        <Card.Content>
        <Text variant="titleMedium">Book Finder</Text>
        <Text variant="bodyMedium">Get personalized book recommendations.</Text>
        </Card.Content>
        {Platform.OS != 'web' ?
            <LottieView
            autoPlay
            style={{
            width: 200,
            height: 200
            }}
            source={require('../../assets/lottie/book.json')}
        />
        : <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> }
        <Card.Actions>
        <Button>Explore</Button>
        </Card.Actions>
  </Card>
  </View>
  );
}