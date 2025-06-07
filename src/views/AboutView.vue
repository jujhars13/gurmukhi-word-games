<template>
  <div class="about">
    <b-card no-body class="mb-4">
      <b-card-header>
        <h2>About Gurmukhi Word Games</h2>
      </b-card-header>
      <b-card-body>
        <b-card-text>
          <p class="lead">
            This application provides interactive word games to help users learn Gurmukhi script.
          </p>

          <h4>What is Gurmukhi?</h4>
          <p>
            Gurmukhi is a script used primarily for the Punjabi language. It was standardized by
            Guru Angad Dev Ji, the second Sikh Guru, in the 16th century. The name 'Gurmukhi'
            literally means 'from the mouth of the Guru'.
          </p>

          <h4>Our Mission</h4>
          <p>
            Our mission is to make learning Gurmukhi accessible and enjoyable through interactive
            word games. Whether you're a beginner or looking to improve your skills, our games cater
            to all levels.
          </p>
        </b-card-text>
      </b-card-body>
    </b-card>

    <b-row>
      <b-col md="6">
        <b-card title="How to Play" class="mb-4">
          <ol>
            <li>Choose a game from the home page</li>
            <li>Read the instructions for the specific game</li>
            <li>Practice and have fun while learning!</li>
            <li>Track your progress and challenge yourself</li>
          </ol>
          <b-button variant="primary">Start Playing</b-button>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Contact Us" class="mb-4">
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <b-form>
            <b-form-group label="Email address:">
              <b-form-input type="email" placeholder="Enter your email"></b-form-input>
            </b-form-group>
            <b-form-group label="Message:">
              <b-form-textarea rows="3" placeholder="Enter your message"></b-form-textarea>
            </b-form-group>
            <b-button variant="info">Submit</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.about {
  padding: 1rem 0;
}
</style>
