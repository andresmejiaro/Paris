## Multi-agent limits

- Never have more than 3 spawned agents open concurrently.
- Maximum delegation depth is 2: the primary agent may spawn children, and those children may spawn grandchildren.
- Grandchildren must not spawn additional agents.
