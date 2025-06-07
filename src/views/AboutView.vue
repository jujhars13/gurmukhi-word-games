<template>
  <div class="about">
    <div class="card mb-4">
      <div class="card-header">
        <h2>About Gurmukhi Games</h2>
      </div>
      <div class="card-body">
        <p class="lead">
          This application provides interactive word games to help users learn Gurmukhi script.
        </p>

        <h4>What is Gurmukhi?</h4>
        <p>
          Gurmukhi is a script invented by Guru Nanank. It was standardized by Guru Angad Dev Ji,
          the second Sikh Guru, in the 16th century. The name 'Gurmukhi' literally means 'from the
          mouth of the Guru'.
        </p>

        <h4>Our Mission</h4>
        <p>
          Our mission is to make learning Gurmukhi accessible and enjoyable through interactive word
          games. Whether you're a beginner or looking to improve your skills, our games cater to all
          levels.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-header">
            <h5 class="card-title">How to Play</h5>
          </div>
          <div class="card-body">
            <ol>
              <li>Choose a game from the home page</li>
              <li>Read the instructions for the specific game</li>
              <li>Practice and have fun while learning!</li>
              <li>Track your progress and challenge yourself</li>
            </ol>
            <RouterLink to="/games" class="btn btn-primary">Start Playing</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-header">
            <h5 class="card-title">Contact Us</h5>
          </div>
          <div class="card-body">
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message:</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 1rem 0;
}
</style>
