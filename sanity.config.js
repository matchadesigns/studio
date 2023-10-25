import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {colorInput} from '@sanity/color-input'
import { dashboardTool } from "@sanity/dashboard";
//import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Mâtcha Designs',
  projectId: 'w9xbrx0s',
  dataset: 'production',
  plugins: [
    deskTool(),
    colorInput(),
    /*
    dashboardTool({
        widgets: [
            documentListWidget(),
        ],
    }
    */
  ],
  schema: {
    types: schemaTypes,
  },
})