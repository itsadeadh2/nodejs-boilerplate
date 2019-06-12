const HealthCheckService = {
  async status() {
    return {
      status: 'ok'
    }
  }
}

module.exports = HealthCheckService
