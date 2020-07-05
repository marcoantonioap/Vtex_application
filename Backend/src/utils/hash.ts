import bcrypt from 'bcrypt'

export const hashPasswordAsync = async (password: string) => {
	const salt = await bcrypt.genSalt()
	const hash = await bcrypt.hash(password, salt)
  return hash
}

export const authenticateLogin = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}