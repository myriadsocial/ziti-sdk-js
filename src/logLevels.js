const LogLevel = {}
LogLevel[LogLevel.Fatal = 0] = 'Fatal'
LogLevel[LogLevel.Error = 0] = 'Error'
LogLevel[LogLevel.Warn = 1] = 'Warn'
LogLevel[LogLevel.Log = 2] = 'Log'
LogLevel[LogLevel.Info = 3] = 'Info'
LogLevel[LogLevel.Success = 3] = 'Success'
LogLevel[LogLevel.Ziti = 3] = 'Ziti'
LogLevel[LogLevel.Debug = 4] = 'Debug'
LogLevel[LogLevel.Trace = 5] = 'Trace'
LogLevel[LogLevel.Silent = -Infinity] = 'Silent'
LogLevel[LogLevel.Verbose = Infinity] = 'Verbose'

module.exports = LogLevel;