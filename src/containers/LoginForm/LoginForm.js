import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Input, Button, Spinner } from '../../components';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    margin: 25,
    marginBottom: 0,
  },
};

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button
        color='green'
        onPress={() => this.onButtonPress()}
      >
        Entrar/Cadastrar
      </Button>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={text => this.onEmailChange(text)}
              value={this.props.email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              secureTextEntry
              placeholder='Senha'
              onChangeText={text => this.onPasswordChange(text)}
              value={this.props.password}
            />
          </View>
          <View style={styles.inputContainer}>
            {this.renderButton()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

LoginForm.navigationOptions = {
  title: 'Login',
};

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  loading: auth.loading,
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
