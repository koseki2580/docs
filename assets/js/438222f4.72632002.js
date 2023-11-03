"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[7582],{34563:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(85893),r=t(11151),i=t(74866),l=t(85162);t(97936);const o={title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",sidebar_label:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},s=void 0,d={id:"Search-Algorithm/at-first",title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",description:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",source:"@site/docs/04-Search-Algorithm/00-at-first.md",sourceDirName:"04-Search-Algorithm",slug:"/Search-Algorithm/at-first",permalink:"/study-docs/docs/Search-Algorithm/at-first",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/04-Search-Algorithm/00-at-first.md",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1699013650,formattedLastUpdatedAt:"2023\u5e7411\u67083\u65e5",sidebarPosition:0,frontMatter:{title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",sidebar_label:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},sidebar:"Search-AlgorithmSidebar",next:{title:"MiniMax\u6cd5",permalink:"/study-docs/docs/Search-Algorithm/alternate-move-game/mini-max"}},c={},u=[{value:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:2},{value:"\u30aa\u30bb\u30ed",id:"\u30aa\u30bb\u30ed",level:3}];function p(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}),"\n",(0,a.jsx)(e.p,{children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3001\u4e0e\u3048\u3089\u308c\u305f\u554f\u984c\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u76ee\u6a19\u3001\u89e3\u3001\u307e\u305f\u306f\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u898b\u3064\u3051\u308b\u305f\u3081\u306e\u8a08\u7b97\u624b\u6cd5\u3067\u3042\u308b\u3002\n\u30b2\u30fc\u30e0\u306a\u3069\u306e\u5206\u91ce\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u30aa\u30bb\u30ed",children:"\u30aa\u30bb\u30ed"}),"\n",(0,a.jsx)(e.p,{children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5b9f\u88c5\u3057\u3066\u3069\u306e\u3088\u3046\u306b\u52dd\u7387\u304c\u5909\u5316\u3059\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u30aa\u30bb\u30ed\u3092\u984c\u6750\u306b\u3057\u3066\u898b\u3066\u3044\u3053\u3046\u3068\u601d\u3046\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u305d\u306e\u305f\u3081\u3001\u5404\u8a00\u8a9e\u306e\u30aa\u30bb\u30ed\u3092\u884c\u3046\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002\u4eca\u5f8c\u306f Player \u30af\u30e9\u30b9\u306b\u3067\u65b0\u3057\u3044\u6226\u7565\u3092\u8ffd\u52a0\u3057\u3001\u4ed6\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u5bfe\u6c7a\u3055\u305b\u3066\u3044\u304f\u3053\u3068\u3092\u8003\u3048\u308b\u3002\n\u53d6\u308c\u308b\u624b\u306e\u4e2d\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u3067\u624b\u3092\u9078\u629e\u3059\u308b\u6226\u7565\u3092\u57fa\u6e96\u6226\u7565\u3068\u3057\u3066\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3002"}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"\u3082\u3063\u3068\u3044\u3044\u5b9f\u88c5\u65b9\u6cd5\u3084\u304a\u304b\u3057\u306a\u70b9\u304c\u3042\u308c\u3070\u3001\u6559\u3048\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"})}),"\n",(0,a.jsxs)(i.Z,{groupId:"code",children:[(0,a.jsx)(l.Z,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import random\nfrom enum import Enum\nimport copy\nfrom abc import ABC, abstractmethod\n\n\nclass GameState(Enum):\n    BLACK_WIN = "Black Win"\n    WHITE_WIN = "White Win"\n    DRAW = "Draw"\n    IN_PROGRESS = "In Progress"\n\n\nclass Othello():\n\n    map_size = 8\n    directions = [\n        (-1, -1), (-1, 0), (-1, 1),\n        (0, -1),            (0, 1),\n        (1, -1), (1, 0), (1, 1)\n    ]\n\n    def __init__(self) -> None:\n        self.board = [[-1] * self.map_size for _ in range(self.map_size)]\n        half = self.map_size // 2\n        # 0\u304cwhite\n        # 1\u304cblack\u3068\u3059\u308b\n        self.board[half][half] = 0\n        self.board[half-1][half] = 1\n        self.board[half][half-1] = 1\n        self.board[half-1][half-1] = 0\n\n    def is_done(self):\n        for i in range(self.map_size):\n            for j in range(self.map_size):\n                if self.board[i][j] == -1:\n                    return False\n        return True\n\n    def is_done(self):\n        for i in range(self.map_size):\n            for j in range(self.map_size):\n                # \u304a\u3051\u308b\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\u304b\n                # \u3069\u3061\u3089\u304b\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u99d2\u3092\u7f6e\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u304b\n                if self.board[i][j] == -1 and len(self.legal_actions(0)) + len(self.legal_actions(1)) != 0:\n                    return False\n        return True\n\n    def is_valid_action(self, player, y, x):\n        # \u3059\u3067\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\n        if self.board[y][x] >= 0:\n            return False\n\n        for dy, dx in self.directions:\n            ny = y + dy\n            nx = x + dx\n            # \u76e4\u9762\u5916\n            if not (0 <= ny < self.map_size and 0 <= nx < self.map_size):\n                continue\n\n            # \u96a3\u304c\u76f8\u624b\u306e\u30de\u30b9\u3067\u306a\u3044\n            if player ^ self.board[ny][nx] != 1:\n                continue\n\n            # \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\u304b\n            ny += dy\n            nx += dx\n            while 0 <= ny < self.map_size and 0 <= nx < self.map_size:\n                # \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\n                if self.board[ny][nx] ^ player == 0:\n                    return True\n                elif self.board[ny][nx] ^ player == 1:\n                    ny += dy\n                    nx += dx\n                    continue\n                # \u81ea\u5206\u306e\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u524d\u306b\u4f55\u3082\u7f6e\u304b\u308c\u3066\u3044\u306a\u3044\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u304b\n                break\n\n        return False\n\n    def get_winner(self):\n        if (self.is_done()):\n            black = 0\n            for i in range(self.map_size):\n                black += sum(self.board[i])\n            white = self.map_size * self.map_size - black\n            if black < white:\n                return GameState.WHITE_WIN.value\n            elif black == white:\n                return GameState.DRAW.value\n            return GameState.BLACK_WIN.value\n        else:\n            return GameState.IN_PROGRESS.value\n\n    def put(self, player, pos: tuple):\n        self.board[pos[0]][pos[1]] = player\n\n        for dy, dx in self.directions:\n            ny = pos[0] + dy\n            nx = pos[1] + dx\n            turn_over = []\n            while 0 <= ny < self.map_size and 0 <= nx < self.map_size:\n                # \u3072\u3063\u304f\u308a\u8fd4\u3059\u3082\u306e\u3092\u5165\u308c\u308b\n                if player ^ self.board[ny][nx] == 1:\n                    turn_over.append((ny, nx))\n                    ny += dy\n                    nx += dx\n                    continue\n                break\n            # \u3072\u3063\u304f\u308a\u8fd4\u3059\u5bfe\u8c61\u306e\u6700\u5f8c\u304c\u81ea\u5206\u306e\u30de\u30b9\u3067\u3042\u308b\u304b\n            if not ((0 <= ny < self.map_size and 0 <= nx < self.map_size)\n                    and self.board[ny][nx] == player):\n                continue\n            # \u3072\u3063\u304f\u308a\u8fd4\u3059\n            for y, x in turn_over:\n                self.board[y][x] = player\n\n    def copy_board(self):\n        # \u73fe\u5728\u306e\u76e4\u9762\u3092\u30c7\u30a3\u30fc\u30d7\u30b3\u30d4\u30fc\u3057\u3066\u65b0\u3057\u3044\u76e4\u9762\u3092\u4f5c\u6210\n        return copy.deepcopy(self)\n\n    def get_count(self):\n        # \u73fe\u5728\u306e\u767d\u3068\u9ed2\u306e\u30de\u30b9\u3092\u8fd4\u3059\n        black = 0\n        white = 0\n        for i in range(self.map_size):\n            for j in range(self.map_size):\n                if self.board[i][j] == 1:\n                    black += 1\n                elif self.board[i][j] == 0:\n                    white += 1\n        return (white, black)\n\n    def __str__(self):\n        ret = []\n        ret.append("Player Information")\n        white, black = self.get_count()\n        ret.append(f"Black: {black}")\n        ret.append(f"White: {white}")\n        ret.append("----------------------------")\n        ret.append("Board Information")\n        board = [""]\n        for i in range(self.map_size):\n            tmp = [""]\n            bar = [""]\n            for j in range(self.map_size):\n                if self.board[i][j] == 1:\n                    tmp.append("\u26ab\ufe0f")\n                elif self.board[i][j] == 0:\n                    tmp.append("\u26aa\ufe0f")\n                else:\n                    tmp.append("\u3000")\n                bar.append("\u30fc")\n            tmp.append("\\n")\n            board.append("|".join(tmp))\n            bar.append("\\n")\n        bar = " ".join(bar)\n        board.append("")\n        ret.append(bar.join(board))\n        return "\\n".join(ret)\n\n\nclass Action(ABC):\n\n    def __init__(self, _id: int) -> None:\n        self.id = _id\n\n    @abstractmethod\n    def action(self, othello: Othello) -> tuple[int, int]:\n        raise NotImplementedError("")\n\n\nclass RandomAction(Action):\n\n    def __init__(self, id: int) -> None:\n        super().__init__(id)\n\n    def action(self,  othello: Othello):\n        actions = othello.legal_actions(self.id)\n        if len(actions) == 0:\n            return None\n        num = random.randint(0, len(actions)-1)\n        return actions[num]\n\n\n\nclass Player():\n\n    def __init__(self, _id: int, board: Othello, strategy: str) -> None:\n        self.id = _id\n        self.othello = board\n        # \u6b21\u306e\u624b\u3092\u9078\u629e\u3059\u308b\u624b\u6cd5\u3092\u8fd4\u308b\n        match strategy:\n            case "random":\n                self.strategy = RandomAction(_id)\n            case _:\n                self.strategy = RandomAction(_id)\n\n    def put(self):\n        action = self.strategy.action(self.othello.copy_board())\n        # \u7f6e\u304f\u3068\u3053\u308d\u304c\u306a\u304b\u3063\u305f\u5834\u5408\n        if action is None:\n            return\n\n        self.othello.put(self.id, action)\n\n    def random_action(self, actions: list, *args, **keyword):\n        num = random.randint(0, len(actions)-1)\n        return num\n\n\ndef play_game(player1_strategy, player2_strategy):\n    # \u5bfe\u6226\u30de\u30c3\u30d7\u4f5c\u6210\n    othello = Othello()\n\n    # player\u3092\u4f5c\u6210\n    player1 = Player(0, othello, player1_strategy)\n    player2 = Player(1, othello, player2_strategy)\n\n    while (not othello.is_done()):\n        # player1\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player1.put()\n\n        # player2\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player2.put()\n    return othello.get_winner()\n\nn = 100\nwhite = 0\nblack = 0\ndraw = 0\nfor i in range(n):\n    win = play_game("random", "random")\n    print(f"{i}\u56de\u76ee: {win.value}")\n    if win == GameState.WHITE_WIN:\n        white += 1\n    elif win == GameState.BLACK_WIN:\n        black += 1\n    else:\n        draw += 1\n\nprint(f"\u767d\u306e\u52dd\u7387: {white/n}")\nprint(f"\u9ed2\u306e\u52dd\u7387: {black/n}")\nprint(f"\u5f15\u304d\u5206\u3051: {draw/n}")\n\n\n\n'})})}),(0,a.jsx)(l.Z,{value:"C++",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n#include <vector>\n#include <random>\n#include <bits/stdc++.h>\n\nenum class Strategy\n{\n    RANDOM,\n}\nclass Othello\n{\npublic:\n    static const int mapSize = 8;\n    inline static const int directions[8][2] = {\n        {-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};\n\n    Othello()\n    {\n        board = std::vector<std::vector<int>>(mapSize, std::vector<int>(mapSize, -1));\n        // 0\u304cwhite\n        // 1\u304cblack\u3068\u3059\u308b\n        int half = mapSize / 2;\n        board[half][half] = 0;\n        board[half - 1][half] = 1;\n        board[half][half - 1] = 1;\n        board[half - 1][half - 1] = 0;\n    }\n\n    bool isDone()\n    {\n        for (int i = 0; i < mapSize; ++i)\n        {\n            for (int j = 0; j < mapSize; ++j)\n            {\n                if (board[i][j] == -1 && legalActions(0).size() + legalActions(1).size() != 0)\n                {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n\n    std::vector<std::pair<int, int>> legalActions(int player)\n    {\n        std::vector<std::pair<int, int>> actions;\n        for (int i = 0; i < mapSize; ++i)\n        {\n            for (int j = 0; j < mapSize; ++j)\n            {\n                if (isValidAction(player, i, j))\n                {\n                    actions.push_back({i, j});\n                }\n            }\n        }\n        return actions;\n    }\n\n    bool isValidAction(int player, int y, int x)\n    {\n        // \u3059\u3067\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\n        if (board[y][x] >= 0)\n        {\n            return false;\n        }\n\n        for (int dir = 0; dir < 8; ++dir)\n        {\n            int dy = directions[dir][0];\n            int dx = directions[dir][1];\n            int ny = y + dy;\n            int nx = x + dx;\n            // \u76e4\u9762\u5916\n            if (!(ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize))\n            {\n                continue;\n            }\n            // \u96a3\u304c\u76f8\u624b\u306e\u30de\u30b9\u3067\u306a\u3044\n            if ((player ^ board[ny][nx]) != 1)\n            {\n                continue;\n            }\n            // \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\u304b\n            ny += dy;\n            nx += dx;\n            while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)\n            {\n                // \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\n                if ((board[ny][nx] ^ player) == 0)\n                {\n                    return true;\n                }\n                else if ((board[ny][nx] ^ player) == 1)\n                {\n                    ny += dy;\n                    nx += dx;\n                    continue;\n                }\n                // \u81ea\u5206\u306e\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u524d\u306b\u4f55\u3082\u7f6e\u304b\u308c\u3066\u3044\u306a\u3044\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u304b\n                break;\n            }\n        }\n\n        return false;\n    }\n\n    std::string getWinner()\n    {\n        if (isDone())\n        {\n            int black = 0;\n            for (int i = 0; i < mapSize; ++i)\n            {\n                black += std::accumulate(board[i].begin(), board[i].end(), 0);\n            }\n            int white = mapSize * mapSize - black;\n            if (black < white)\n            {\n                return "White Win";\n            }\n            else if (black == white)\n            {\n                return "Draw";\n            }\n            return "Black Win";\n        }\n        else\n        {\n            return "In Progress";\n        }\n    }\n\n    void put(int player, std::pair<int, int> pos)\n    {\n        board[pos.first][pos.second] = player;\n\n        for (int dir = 0; dir < 8; ++dir)\n        {\n            int dy = directions[dir][0];\n            int dx = directions[dir][1];\n            int ny = pos.first + dy;\n            int nx = pos.second + dx;\n            std::vector<std::pair<int, int>> turn_over;\n\n            while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)\n            {\n                // \u3072\u3063\u304f\u308a\u8fd4\u3059\u3082\u306e\u3092\u5165\u308c\u308b\n                if ((player ^ board[ny][nx]) == 1)\n                {\n                    turn_over.push_back(std::make_pair(ny, nx));\n                    ny += dy;\n                    nx += dx;\n                    continue;\n                }\n                break;\n            }\n            // \u3072\u3063\u304f\u308a\u8fd4\u3059\u5bfe\u8c61\u306e\u6700\u5f8c\u304c\u81ea\u5206\u306e\u30de\u30b9\u3067\u3042\u308b\u304b\n            if (!((ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize) && board[ny][nx] == player))\n            {\n                continue;\n            }\n            // \u3072\u3063\u304f\u308a\u8fd4\u3059\n            for (const auto &move : turn_over)\n            {\n                board[move.first][move.second] = player;\n            }\n        }\n    }\n\n    Othello copyBoard()\n    {\n        // \u73fe\u5728\u306e\u76e4\u9762\u3092\u30c7\u30a3\u30fc\u30d7\u30b3\u30d4\u30fc\u3057\u3066\u65b0\u3057\u3044\u76e4\u9762\u3092\u4f5c\u6210\n        Othello copy = *this;\n        return copy;\n    }\n\n    std::pair<int, int> getCount()\n    {\n        int white = 0;\n        int black = 0;\n        for (int i = 0; i < mapSize; ++i)\n        {\n            for (int j = 0; j < mapSize; ++j)\n            {\n                if (board[i][j] == 1)\n                {\n                    black++;\n                }\n                else if (board[i][j] == 0)\n                {\n                    white++;\n                }\n            }\n        }\n        return std::make_pair(white, black);\n    }\n\n    std::string toString()\n    {\n        std::stringstream os("");\n        os << "Player Information" << std::endl;\n\n        std::pair<int, int> mass = getCount();\n        int black = mass.second;\n        int white = mass.first;\n\n        os << "Black: " << black << std::endl;\n        os << "White: " << white << std::endl;\n\n        os << "----------------------------" << std::endl;\n        os << "Board Information" << std::endl;\n\n        auto addSidebar = []() -> std::string\n        {\n            std::stringstream bar("");\n            for (int i = 0; i < mapSize; ++i)\n            {\n                bar << " ";\n                bar << "\u30fc";\n            }\n            return bar.str();\n        };\n        os << addSidebar() << std::endl;\n        for (int i = 0; i < mapSize; ++i)\n        {\n            os << "|";\n            for (int j = 0; j < mapSize; ++j)\n            {\n                if (board[i][j] == 1)\n                {\n                    os << "\u26ab\ufe0f";\n                }\n                else if (board[i][j] == 0)\n                {\n                    os << "\u26aa\ufe0f";\n                }\n                else\n                {\n                    os << "\u3000";\n                }\n                os << "|";\n            }\n            os << std::endl;\n            os << addSidebar() << std::endl;\n        }\n        return os.str();\n    }\n\n    std::vector<std::vector<int>> getBoard()\n    {\n        return board;\n    }\n\n    // \u30b3\u30d4\u30fc\u4ee3\u5165\u6f14\u7b97\u5b50\n    Othello &\n    operator=(const Othello &other)\n    {\n        if (this != &other)\n        { // \u81ea\u5df1\u4ee3\u5165\u3092\u30c1\u30a7\u30c3\u30af\n            // \u30e1\u30f3\u30d0\u5909\u6570\u3092\u30c7\u30a3\u30fc\u30d7\u30b3\u30d4\u30fc\u3059\u308b\n            this->board = other.board;\n        }\n        return *this;\n    }\n\nprivate:\n    std::vector<std::vector<int>> board;\n};\n\nclass Action\n{\n\npublic:\n    Action(int value) : id(value)\n    {\n    }\n    // \u7d14\u7c8b\u4eee\u60f3\u95a2\u6570\u3092\u5ba3\u8a00\n    virtual std::optional<std::pair<int, int>> action(Othello othello) = 0;\n\nprotected:\n    int id;\n};\n\nclass RandomAction : public Action\n{\n\npublic:\n    RandomAction(int value) : Action(value)\n    {\n    }\n    std::optional<std::pair<int, int>> action(Othello othello) override\n    {\n        // \u3053\u3053\u306b\u5b9f\u88c5\u3092\u8ffd\u52a0\n        std::vector<std::pair<int, int>> actions = othello.legalActions(this->id);\n        if (actions.empty())\n        {\n            return std::nullopt;\n        }\n        int index = calc(actions);\n        return actions[index];\n    }\n\n    int calc(const std::vector<std::pair<int, int>> &actions)\n    {\n        std::random_device rd;\n        std::mt19937 gen(rd());\n        std::uniform_int_distribution<int> dist(0, actions.size() - 1);\n        return dist(gen);\n    }\n};\n\n\nclass Player\n{\n\npublic:\n    Player(int _id, Othello &_othello, const Strategy strategy, int depth = 2, Evaluation evaluation = Evaluation::MASS_COUNT) : id(_id), othello(_othello)\n    {\n        id = _id;\n        switch (strategy)\n        {\n        case Strategy::RANDOM:\n            this->strategy = std::make_unique<RandomAction>(_id);\n            break;\n        default:\n            this->strategy = std::make_unique<RandomAction>(_id);\n            break;\n        }\n    }\n\n    void put()\n    {\n        std::optional<std::pair<int, int>> action = strategy->action(othello.copyBoard());\n        if (!action.has_value())\n        {\n            return;\n        }\n        othello.put(id, action.value());\n    }\n\nprivate:\n    int id;\n    Othello &othello;\n    std::unique_ptr<Action> strategy = nullptr;\n    int (Player::*action)(const std::vector<std::pair<int, int>> &);\n};\n\nstd::string playGame(const Strategy player1_strategy, const Strategy player2_strategy)\n{\n    Othello othello;\n\n    Player player1(0, othello, player1_strategy);\n    Player player2(1, othello, player2_strategy);\n\n\n    while (!othello.isDone())\n    {\n        player1.put();\n\n        player2.put();\n    }\n    return othello.getWinner();\n}\n\nint main()\n{\n    int n = 100;\n    int white = 0;\n    int black = 0;\n    int draw = 0;\n    for (int i = 0; i < n; ++i)\n    {\n        std::string win = playGame(Strategy::RANDOM, Strategy::RANDOM);\n        printf("%d: %s\\n", i, win.c_str());\n\n        if (win == "White Win")\n            white++;\n        else if (win == "Black Win")\n            black++;\n        else\n            draw++;\n    }\n    printf("\u767d\u306e\u52dd\u7387: %0.5f\\n", (double)white / n);\n    printf("\u9ed2\u306e\u52dd\u7387: %0.5f\\n", (double)black / n);\n    printf("\u5f15\u304d\u5206\u3051: %0.5f", (double)draw / n);\n    return 0;\n}\n'})})})]})]})}function f(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>l});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(n){let{children:e,hidden:t,className:l}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>w});var a=t(67294),r=t(86010),i=t(12466),l=t(16550),o=t(20469),s=t(91980),d=t(67392),c=t(50012);function u(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:r}}=n;return{value:e,label:t,attributes:a,default:r}}))}(t);return function(n){const e=(0,d.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function f(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:t}=n;const r=(0,l.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,n),r.replace({...r.location,search:e.toString()})}),[i,r])]}function m(n){const{defaultValue:e,queryString:t=!1,groupId:r}=n,i=p(n),[l,s]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[d,u]=h({queryString:t,groupId:r}),[m,b]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,i]=(0,c.Nk)(t);return[r,(0,a.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:r}),y=(()=>{const n=d??m;return f({value:n,tabValues:i})?n:null})();(0,o.Z)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((n=>{if(!f({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);s(n),u(n),b(n)}),[u,b,i]),tabValues:i}}var b=t(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(85893);function g(n){let{className:e,block:t,selectedValue:a,selectValue:l,tabValues:o}=n;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=n=>{const e=n.currentTarget,t=s.indexOf(e),r=o[t].value;r!==a&&(d(e),l(r))},u=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=s.indexOf(n.currentTarget)+1;e=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(n.currentTarget)-1;e=s[t]??s[s.length-1];break}}e?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:i}=n;return(0,_.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>s.push(n),onKeyDown:u,onClick:c,...i,className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function v(n){let{lazy:e,children:t,selectedValue:r}=n;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===r));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function x(n){const e=m(n);return(0,_.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,_.jsx)(g,{...n,...e}),(0,_.jsx)(v,{...n,...e})]})}function w(n){const e=(0,b.Z)();return(0,_.jsx)(x,{...n,children:u(n.children)},String(e))}},97936:(n,e,t)=>{t.d(e,{Z:()=>r});t(67294);var a=t(85893);function r(n){let{children:e,color:t}=n;return(0,a.jsx)("span",{style:{color:t},children:e})}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>l});var a=t(67294);const r={},i=a.createContext(r);function l(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);