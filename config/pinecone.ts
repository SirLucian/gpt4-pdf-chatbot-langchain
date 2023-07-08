/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */

if (!process.env.PINECONE_INDEX_NAME) {
  throw new Error('Missing Pinecone index name in .env file');
}

export const usePineconeStore = create<PineconeState>((set) => ({
  PINECONE_NAME_SPACE: TOPICS[0],
  PINECONE_INDEX_NAME: PINECONE_INDEX_NAME,
  setPineconeNamespace: (namespace: {
    TOPIC: string;
    NAMESPACE: string;
    PROMPT?: string;
  }) => set({ PINECONE_NAME_SPACE: namespace }),
}));
