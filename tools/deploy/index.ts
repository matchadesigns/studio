import {MdRocketLaunch} from 'react-icons/md'
import {definePlugin} from 'sanity'
import {DeployTool} from './DeployTool'

// Studio tool that rebuilds the Gatsby site through a Vercel deploy hook
export const deployTool = definePlugin({
  name: 'matcha-deploy',
  tools: [
    {
      name: 'deploy',
      title: 'Mettre en ligne',
      icon: MdRocketLaunch,
      component: DeployTool,
    },
  ],
})
