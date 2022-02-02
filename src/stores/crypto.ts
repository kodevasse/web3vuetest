import { ethers } from 'ethers'
import { acceptHHMRUpdate, defineStore } from 'pinia
import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
const contractAddress = '0x11c448B14131d3cAeD675a189261724a44cBe385'

export const useCryptoStore = defineStore('user', () => {
    const account = ref(null)
    const guestPosts = ref([] as any)
    const loading = ref(false)
    const guestPostsCount = ref(0)

    async function getBalance() {
        setLoader(true)
        try{
            const { ethereum } = window
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum)
            }
        }
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useCryptoStore, import))