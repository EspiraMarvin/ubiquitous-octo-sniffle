import { AuthProvider } from './AuthContext'
import { PhotoProvider } from './PhotoContext'

import { combineComponents } from '../utils/CombineComponents'

// create general app context - containing photos and auth states

const providers = [PhotoProvider, AuthProvider]

const AppProvider = combineComponents(...providers)

export default AppProvider
