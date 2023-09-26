import { visionTool } from "@sanity/vision";
import { defineConfig, defineField, defineType } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
    name: 'default',
	projectId: 'odh6ii6d',
    dataset: 'production',
	title: "Noah's Sandbox",

	plugins: [deskTool(), visionTool()],

    schema: {
        types: [
            defineType({
                title: 'Article',
                name: 'article',
                type: 'document' as const,
                fields: [
                    defineField({
                        title: 'Title',
                        name: 'title',
                        type: 'string',
                        validation: rule => rule.required()
                    }),
                    defineField({
                        title: 'Slug',
                        name: 'slug',
                        type: 'slug',
                        validation: rule => rule.required(),
                        options: {
                            source: 'title'
                        }
                    })
                ]
            })
        ]
    }
})