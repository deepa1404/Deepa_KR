class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        ans = []
        i = 0
        j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                ans.append(i)
                i += 1
                j += 1
            else:
                j += 1
        return len(s) == len(ans)
        
               