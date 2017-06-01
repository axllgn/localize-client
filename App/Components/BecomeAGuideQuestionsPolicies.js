import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default class BecomeAGuideQuestionsPolicies extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToConfirmation = this.navigateToConfirmation.bind(this);
  }

  navigateToConfirmation() {
    this.props.navigation.navigate('GuideQuestionsConfirmation');
  }

  render() {
    return (
      <ScrollView>
        <Card
          title='Terms & Conditions'
        >
          <Text style={{marginBottom: 10}}>
            HelloWorld enforces terms to protect both tourists and guides alike. Guide(s) or Tourist(s) may cancel and review any penalties by viewing their travel plans and then clicking ‘Cancel’ on the appropriate reservation.
          </Text>
          <Button
            small
            raised
            icon={{name: 'check-circle'}}
            backgroundColor='#FF8C00'
            title='Confirm and Post Myself!'
            buttonStyle={{marginTop: 10}}
            onPress={this.navigateToConfirmation}
          />
        </Card>
      </ScrollView>
    );
  }
}