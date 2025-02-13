import {Button} from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth, } from 'firebase/auth'
import { app } from '../firebase'
import { signInSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function OAuth() {
  const auth = getAuth(app)
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})

    try{
      const resultsFromGoogle = await signInWithPopup(auth, provider)
      const res = await fetch ('api/auth/google', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      })

      const data = await res.json()
      if(res.ok){
        dispatch(signInSuccess(data));
        navegate('/')
      }

    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className="mb-6">
            <Button
              type="button"
              className="w-full bg-gray-300 text-black hover:bg-gray-200 border border-gray-300 dark:bg-white"
              onClick={handleGoogle}
            >
            <AiFillGoogleCircle  className='w-6 h-6 mr-2'/>
              Continue with Google
              </Button>
            
          </div>
  )
}

export default OAuth