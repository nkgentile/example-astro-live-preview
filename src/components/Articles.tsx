import { useLiveQuery, LiveQueryProvider } from "@sanity/preview-kit";
import { useMemo } from "react";
import {createClient} from '@sanity/preview-kit/client'

export function Preview(props: { initialData: any[]; token: string }) {
    const { initialData, token } = props;


    const client = useMemo(() => createClient({
        projectId: 'odh6ii6d',
        dataset: 'production',
        studioUrl: '/studio',
        encodeSourceMap: 'auto',
        apiVersion: '2023-08-01',
        useCdn: false,
        token,
    }), [])

    return <LiveQueryProvider client={client}>
        <Articles data={initialData}/>
    </LiveQueryProvider>

}

function Articles(props: {data: any}){
    const {data} = props
    const [articles] = useLiveQuery(data, `*[_type == "article"]`)
    return <ul>{articles.map((article: any) => <li key={article._id}>{article.title}</li>)}</ul>
}