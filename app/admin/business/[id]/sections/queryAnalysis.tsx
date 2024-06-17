
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SentimentSection from "./subsections/sentimentSection";
import KeywordSection from "./subsections/keywordSection";
import TopicSection from "./subsections/topicSection";
export const QueryAnalysis = () => {
    return (
    
      <Tabs defaultValue="topics">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
         <TabsList className="mt-8  mx-auto">
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="sentiments">Sentiments</TabsTrigger>
           
          </TabsList>
  
          <TabsContent value="topics">
           <TopicSection/>
          </TabsContent>
  
          <TabsContent value="keywords">
          <KeywordSection/>
           </TabsContent>
  
           <TabsContent value="sentiments">
          <SentimentSection/>
          </TabsContent>
      </div>
      </Tabs>
   
    );
  };
  